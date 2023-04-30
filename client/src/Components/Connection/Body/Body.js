import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite"
import Socket from "../../../Store/socket";
import Status from "../../../Store/status";
import TimeStamp from "../../../Store/timeStamp";
import ProtoMessageDecoder from "../../../api/ParseProto";

const ConnectionBody = observer(({ commands }) => {
  const [selectedCommand, setSelectedCommand] = useState(null);
  const [commandData, setCommandData] = useState({});
  const [status, setStatus] = useState("");
  const [resTime, setResTime] = useState("");
  const [resTimeCommand, setResTimeCommand] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const formattedCommand = {
      alias: selectedCommand,
      parameters: Object.entries(commandData).map(([alias, value]) => ({
        alias,
        value,
      })),
    };

    Socket.socket.emit("sentBrokerCommand", JSON.stringify(formattedCommand));
    TimeStamp.resTimeCommand = Date.now();
  };

  useEffect(() => {
    Socket.socket.on("brokerCommandResponse", (data) => {
      data = ProtoMessageDecoder(data);
      console.log(data);
      Status.setStatus(data.response.answerType);
      switch (Status.getStatus()) {
        case 0:
          setStatus("Не поддерживается");
          setErrorText("");
          break;
        case 1:
          setStatus("ОК");
          setErrorText("");
          break;
        case 2:
          setStatus("Ошибка");
          setErrorText(data.response.errorText);
          break;
        default:
          setStatus("");
          setErrorText("");
          break;
      }
      setResTime(Date.now() - data.header.timestamp + " ms");
      setResTimeCommand(TimeStamp.setResTimeCommand(Date.now()) + " ms");
    });
  }, []);

  const handleCommandChange = (event) => {
    const selectedCommandName = event.target.value;
    setSelectedCommand(selectedCommandName);
    setCommandData({});
  };

  const handleInputChange = (parameterAlias, event) => {
    const { value } = event.target;
    setCommandData((prevData) => ({
      ...prevData,
      [parameterAlias]: {
        dataType: "string", // Здесь вы можете указать нужный тип данных
        value,
      },
    }));
  };

  const renderCommandInputs = () => {
    if (selectedCommand) {
      const command = commands.find((cmd) => cmd.alias === selectedCommand);
      if (command) {
        return command.parameters?.map((parameter, index) => (
          <div key={index} className="fieldsInput">
            <p>{parameter.alias}</p>
            <input
              name={parameter.alias}
              placeholder={parameter.hint}
              onChange={(event) => handleInputChange(parameter.alias, event)}
            />
          </div>
        ));
      }
    }
    return null;
  };

  const options = [
    <option key="default" value="">
      Выберите пункт
    </option>,
    ...commands.map((command, index) => (
      <option key={index} value={command.alias}>
        {command.alias}
      </option>
    )),
  ];

  return (
    <div className="connectionTerminal">
      <select value={selectedCommand} onChange={handleCommandChange}>
        {options}
      </select>
      <form className="connectionTerminalBody" onSubmit={handleSubmitForm}>
        {selectedCommand && (
          <>
            <p>{selectedCommand}</p>
            <p>{commands.find((cmd) => cmd.alias === selectedCommand)?.description}</p>
            {renderCommandInputs()}
            <button type="submit">Выполнить</button>
          </>
        )}
      </form>
      {
        (resTime !== "") ? (
          <div className="resTimeContainer">
            <div className="statusBar">
              <p>Задержка ответа: <span>{resTime}</span></p>
              <p>Задержка выполнения команды: <span>{resTimeCommand}</span></p>
              <p>Статус: {status}</p>
              { (errorText!== "") ? (
              <p>Ошибка: <span>{errorText}</span></p>
              ) : (
                null
              )
              }
            </div>
          </div>
        ) : null
      }
    </div>
  );
});

export default ConnectionBody;
