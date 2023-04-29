export const request = {
    "header": {
      "messageNum": "test",
      "timestamp": 123,
      "sender": "test",
      "receiver": "test",
      "messageNumAnswer": "test"
    },
    "request": {
      "command": ["ctHandshake","ctStatus","ctExecCommand"],
      "commandForExec": {
        "alias": "test",
        "caption": "test",
        "description": "test",
        "parameters": [
          {"alias": "test",
            "caption": "test",
            "hint": "test",
            "value":{
              "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"],
              "format": "test",
              "value": "test"
            }
          },
          {"alias": "test",
            "caption": "test",
            "hint": "test",
            "value":{
              "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"],
              "format": "test",
              "value": "test"
            }
          }
        ]
      },
      "supportedCommands": [
        {
        "alias": "test",
        "caption": "test",
        "description": "test",
        "parameters": [
          {"alias": "test",
            "caption": "test",
            "hint": "test",
            "value":{
              "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"],
              "format": "test",
              "value": "test"
            }
          },
          {"alias": "test",
            "caption": "test",
            "hint": "test",
            "value":{
              "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"],
              "format": "test",
              "value": "test"
            }
          }
        ]
      },{
        "alias": "test",
        "caption": "test",
        "description": "test",
        "parameters": [
          {"alias": "test",
            "caption": "test",
            "hint": "test",
            "value":{
              "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"],
              "format": "test",
              "value": "test"
            }
          },
          {"alias": "test",
            "caption": "test",
            "hint": "test",
            "value":{
              "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"],
              "format": "test",
              "value": "test"
            }
          }
        ]
      }
      ]
    }
  }