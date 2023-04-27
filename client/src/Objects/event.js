export const event = {
  "header": {
    "messageNum": "test",
    "timestamp": 123,
    "sender": "test",
    "receiver": "test",
    "messageNumAnswer": "test"
  },
  "event": {
    "status": {
      "type": ["stNotReady", "stReady", "stPerformed"],
      "details": "test",
      "nextTime": 123,
      "advStatus": {
        "caption": "test",
        "fields": [
          {
            "alias": "test",
            "caption": "test",
            "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"]
          },
          {
            "alias": "test",
            "caption": "test",
            "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"]
          }
        ],
        "data": {
          "fullOrIncrement": true,
          "rows": [
            {
              "rowIdent": "test",
              "incrementDelete": true,
              "values": [
                {
                  "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"],
                  "format": "test",
                  "value": "test"
                },
                {
                  "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"],
                  "format": "test",
                  "value": "test"
                }
              ]
            },
            {
              "rowIdent": "test",
              "incrementDelete": true,
              "values": [
                {
                  "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"],
                  "format": "test",
                  "value": "test"
                },
                {
                  "dataType": ["dtString", "dtInteger", "dtFloat", "dtBoolean", "dtDateTime"],
                  "format": "test",
                  "value": "test"
                }
              ]
            }
          ]
        }
      }
    }
  }
}