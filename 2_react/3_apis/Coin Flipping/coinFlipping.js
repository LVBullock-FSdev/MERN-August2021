function tossCoin() {
        return Math.random() > 0.5 ? "HEADS" : "tails";
    }

const fiveHeads = new Promise ( (resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    let maxAttempts = 100;

    while( headsCount < 5 ) {
        attempts++;
        let result = tossCoin();
        // console.log(`${result} was flipped`);  \\using back ticks here, NOT single quotes

        console.log( `Coin toss # ${attempts} -->\t ${result}` );

            if( result === "HEADS") {
                headsCount++;
            } 
            else {
                headsCount = 0;
            } 
        }

        if (attempts <= maxAttempts){
            resolve( `It took ${attempts} coin tosses to get 5 "HEADS" consecutively.`);

        } 
        else{
            reject( `Exceeded ${maxAttempts} coin tosses.` );
        }
    });

    fiveHeads
        .then( res => console.log(res) )
        .catch( err => console.log(err) );

    console.log( "When does this run now?" );  //what is this doing?????
