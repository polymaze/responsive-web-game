var resultSet = conn.execute(<!-- SQL IS IN HERE -->);
var fieldCount = resultSet.fieldCount;
var fields = [];
for(var i = 0; i < fieldCount;i++) {
    fields.push(resultSet.fieldName(i));
};

var results = [];
while (resultSet.isValidRow()) {
    for(var i=0; i < fields.length; i++) {
       results[i] = {};
       results[i][fields[i]] = resultSet.fieldByName(fields[i]);
    }
    resultSet.next();
};
resultSet.close();