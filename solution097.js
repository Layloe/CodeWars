function organizeData(list) {
    const result = {};

    for (let i = 0; i < list.length; i++) {
        const date = new Date(list[i].date);
    
        // Get the start of the week (Sunday) for the current date
        const startOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
    
        // Generate a key for the current week, based on the start of the week
        const weekKey = startOfWeek.toLocaleDateString();
    
        if (!result[weekKey]) {
          result[weekKey] = [];
        }
        result[weekKey].push(list[i]);
      }

  return result;
    // const listWithDayOfWeek = assignDayOfWeek(list);
    // const listWithTimeOfDay = assignTimeOfDay(listWithDayOfWeek);
    // const groupedByDay = groupByDay(listWithTimeOfDay);
    // const groupedByWeek = groupByWeek(groupedByDay);
    // return groupedByWeek;
    // Note: this could be re-written like this:
    // return groupByWeek(groupByDay(assignTimeOfDay(assignDayOfWeek(list))))
  }

  
  const realData = [
    { id: 1, date: "2023-01-06T01:01:01Z", textinput: "test 1", numinput: 1 },
    { id: 2, date: "2023-01-06T12:03:04Z", textinput: "test 2", numinput: 2 },
    { id: 3, date: "2023-01-06T19:35:32Z", textinput: "test 3", numinput: 3 },
    { id: 4, date: "2023-01-07T01:01:01Z", textinput: "test 4", numinput: 4 },
    { id: 5, date: "2023-01-07T12:03:04Z", textinput: "test 5", numinput: 5 },
    { id: 6, date: "2023-01-07T19:35:32Z", textinput: "test 6", numinput: 6 },
    { id: 7, date: "2023-01-08T01:01:01Z", textinput: "test 7", numinput: 7 },
    { id: 8, date: "2023-01-08T12:03:04Z", textinput: "test 8", numinput: 8 },
    { id: 9, date: "2023-01-08T19:35:32Z", textinput: "test 9", numinput: 9 },
    { id: 10, date: "2023-01-09T01:01:01Z", textinput: "test 10", numinput: 10 },
    { id: 11, date: "2023-01-09T12:03:04Z", textinput: "test 11", numinput: 11 },
    { id: 12, date: "2023-01-09T19:35:32Z", textinput: "test 12", numinput: 12 },
    { id: 13, date: "2023-01-10T01:01:01Z", textinput: "test 13", numinput: 13 },
    { id: 14, date: "2023-01-10T12:03:04Z", textinput: "test 14", numinput: 14 },
    { id: 15, date: "2023-01-10T19:35:32Z", textinput: "test 15", numinput: 15 },
    { id: 16, date: "2023-01-11T01:01:01Z", textinput: "test 16", numinput: 16 },
    { id: 17, date: "2023-01-11T12:03:04Z", textinput: "test 17", numinput: 17 },
    { id: 18, date: "2023-01-11T19:35:32Z", textinput: "test 18", numinput: 18 },
    { id: 19, date: "2023-01-12T01:01:01Z", textinput: "test 19", numinput: 19 },
    { id: 20, date: "2023-01-12T12:03:04Z", textinput: "test 20", numinput: 20 },
    { id: 21, date: "2023-01-12T19:35:32Z", textinput: "test 21", numinput: 21 },
    { id: 22, date: "2023-01-13T01:01:01Z", textinput: "test 22", numinput: 22 },
    { id: 23, date: "2023-01-13T12:03:04Z", textinput: "test 23", numinput: 23 },
    { id: 24, date: "2023-01-13T19:35:32Z", textinput: "test 24", numinput: 24 },
    { id: 25, date: "2023-01-14T01:01:01Z", textinput: "test 25", numinput: 25 },
    { id: 26, date: "2023-01-14T12:03:04Z", textinput: "test 26", numinput: 26 },
    { id: 27, date: "2023-01-14T19:35:32Z", textinput: "test 27", numinput: 27 },
    { id: 28, date: "2023-01-15T01:01:01Z", textinput: "test 28", numinput: 28 },
    { id: 29, date: "2023-01-15T12:03:04Z", textinput: "test 29", numinput: 29 },
    { id: 30, date: "2023-01-15T19:35:32Z", textinput: "test 30", numinput: 30 },
    { id: 31, date: "2023-01-16T01:01:01Z", textinput: "test 31", numinput: 31 },
    { id: 32, date: "2023-01-16T12:03:04Z", textinput: "test 32", numinput: 32 },
    { id: 33, date: "2023-01-16T19:35:32Z", textinput: "test 33", numinput: 33 },
  ];
  
  console.log(organizeData(realData));