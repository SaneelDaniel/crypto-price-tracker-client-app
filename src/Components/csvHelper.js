import * as d3 from "d3";

var data = [{}];

d3.csv("/digital_currency_list.csv")
  .then((d) => {
    console.log(d);
    for (var i in d) {
      data.push(d[i]);
    }
  })
  .then((datad) => {console.log("datad", datad, datad);
});

console.log("ddata", data, data[0].length);

var supportedTickers = [];

for (var i in data) {
  console.log(data[1]);
}

export default supportedTickers;
