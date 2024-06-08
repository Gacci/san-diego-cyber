export default {
    groupedByMonthYear: (collection) => {
        return collection.reduce((accum, event) => {
            const key = event.start?.getMonth() 
                +'.'+ event.start?.getDate();
  
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