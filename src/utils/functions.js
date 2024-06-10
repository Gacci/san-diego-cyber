export default {
    groupByDateMonth: (collection) => {
        return collection.reduce((accum, event) => {
            const key = event.start?.getDate() 
                + '.'+ event.start?.getMonth();
  
            if ( accum[key] ) {
                accum[key].push(event);
            }
            else {
                accum[key] = [ event ];
            }
  
            return accum;
        }, {});
    },
    groupByMonthYear: (collection) => {
        return collection.reduce((accum, event) => {
            const key = event.start?.getMonth() 
                + '.'+ event.start?.getFullYear();
  
            if ( accum[key] ) {
                accum[key].push(event);
            }
            else {
                accum[key] = [ event ];
            }
  
            return accum;
        }, {});
    }
}