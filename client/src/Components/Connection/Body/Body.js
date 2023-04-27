import React, { useState } from "react";

const ConnectionBody = ({ commands, socket }) => {
  const [selectedCommand, setSelectedCommand] = useState(null);
  const [commandData, setCommandData] = useState({});

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const formattedCommand = {
      alias: selectedCommand,
      parameters: Object.entries(commandData).map(([alias, value]) => ({
        alias,
        value,
      })),
    };

    socket.emit("sentBrokerCommand", JSON.stringify(formattedCommand));
  };

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
        return command.parameters.map((parameter, index) => (
          <div key={index}>
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
    </div>
  );
};

export default ConnectionBody;
