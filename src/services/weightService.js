export default {
    getData,
    update,
    deleteItem,
    addItem
}



let data = [
    {
        'date': '2020-07-23',
        'weight': 80
    },
    {
        'date': '2020-07-24',
        'weight': 79
    },
    {
        'date': '2020-07-25',
        'weight': 79
    },
    {
        'date': '2020-07-26',
        'weight': 80
    },
    {
        'date': '2020-07-27',
        'weight': 79
    },
    {
        'date': '2020-07-28',
        'weight': 79
    },
    {
        'date': '2020-07-29',
        'weight': 78
    },
    {
        'date': '2020-07-30',
        'weight': 78
    },
    {
        'date': '2020-07-31',
        'weight': 79
    },
    {
        'date': '2020-08-01',
        'weight': 80
    },
    {
        'date': '2020-08-02',
        'weight': 80
    },
    {
        'date': '2020-08-03',
        'weight': 81
    },
    {
        'date': '2020-08-04',
        'weight': 81
    }, {
        'date': '2020-08-05',
        'weight': 80
    },
    {
        'date': '2020-08-06',
        'weight': 79
    },
    {
        'date': '2020-08-07',
        'weight': 79
    },
    {
        'date': '2020-08-08',
        'weight': 79
    },
    {
        'date': '2020-08-09',
        'weight': 78
    },
    {
        'date': '2020-08-10',
        'weight': 78
    },
    {
        'date': '2020-08-11',
        'weight': 77
    },
    {
        'date': '2020-08-12',
        'weight': 77
    },
    {
        'date': '2020-08-13',
        'weight': 77
    },
    {
        'date': '2020-08-14',
        'weight': 76
    }, {
        'date': '2020-08-15',
        'weight': 76
    },
    {
        'date': '2020-08-16',
        'weight': 76
    },
    {
        'date': '2020-08-17',
        'weight': 77
    },
    {
        'date': '2020-08-18',
        'weight': 77
    },
    {
        'date': '2020-08-19',
        'weight': 76
    },
    {
        'date': '2020-08-20',
        'weight': 76
    },
    {
        'date': '2020-08-21',
        'weight': 76
    },
    {
        'date': '2020-08-22',
        'weight': 75
    },
    {
        'date': '2020-08-23',
        'weight': 74
    },
    {
        'date': '2020-08-24',
        'weight': 73
    },

];


function getData(dates={from:'1900-01-01',to:Date.now()}) {
 
   let dataToRender= data.filter(item=>(new Date(item.date))>=(new Date(dates.from))&&(new Date(item.date))<=(new Date(dates.to)))
 
   dataToRender.sort(function(a,b){
   
    return new Date(a.date) - new Date(b.date);
  });
    return dataToRender

}

function update(item,updatedItem) {

let newData=data.map(curr=>curr.date===item.date?updatedItem:curr)
data=[...newData]
return data

}


function deleteItem(item){

let updatedData=data.filter(curr=>curr.date!==item.date)
data=[...updatedData]
return item


}

function addItem(item) {

data.push(item)

return item
}