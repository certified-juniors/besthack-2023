import React, { useState } from "react";

const ConnectionBody = () => {
  const [command, setCommand] = useState("");
  const [selectedCommand, setSelectedCommand] = useState(null);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Обработка отправки формы
  };

  const handleCommandChange = (event) => {
    const selectedCommandName = event.target.value;
    setCommand(selectedCommandName);

    const selectedCommandData = request.find((req) => req.name === selectedCommandName);
    setSelectedCommand(selectedCommandData);
  };

  const handleInputChange = (index, event) => {
    const updatedCommand = [...selectedCommand.command];
    updatedCommand[index].value = event.target.value;
    setSelectedCommand({ ...selectedCommand, command: updatedCommand });
  };

  const request = [
    {
      name: "Command 1",
      description: "Description 1",
      command: [
        {
          value: "value 1",
          dataType: "string",
        },
        {
          value: null,
          dataType: "null",
        },
        {
          value: 1,
          dataType: "integer",
        },
        {
          value: "",
          dataType: "undefined",
        },
      ],
    },
    {
      name: "Command 2",
      description: "description 2",
      command: [
        {
          value: "",
          dataType: "String",
        },
        {
          value: "string",
          dataType: "String",
        },
        {
          value: undefined,
          dataType: "Boolean",
        },
        {
          value: true,
          dataType: "Boolean",
        },
        {
          value: "Sovkom",
          dataType: "String",
        },
      ],
    },
  ];

  const options = [
    <option key="default" value="">
      Выберите пункт
    </option>,
    ...request.map((req, index) => (
      <option key={index} value={req.name}>
        {req.name}
      </option>
    )),
  ];

  const renderCommandInputs = () => {
    if (selectedCommand) {
      return selectedCommand.command.map((input, index) => (
        <div key={index}>
          <p>{input.dataType}</p>
          <input
            placeholder="Значение"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
      ));
    }
    return null;
  };

  return (
    <div className="connectionTerminal">
      <select value={command} onChange={handleCommandChange}>
        {options}
      </select>
      <form className="connectionTerminalBody" onSubmit={handleSubmitForm}>
        <p>{selectedCommand?.name}</p>
        <p>{selectedCommand?.description}</p>
        {renderCommandInputs()}
        {selectedCommand ? <button type="submit">Выполнить</button> : null}
      </form>
    </div>
  );
};

export default ConnectionBody;
