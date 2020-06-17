const mysql = require('mysql');
const con = mysql.createConnection({
    host: '10.148.0.3',
    user: 'nodejs',
    password: 'Angry13ird$',
    database: 'ugw',
});

con.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connection Established'); 
    let queryMsg = "";

    for (let dd = 8; dd <= 14; dd++) {
        for (let hh = 0; hh <= 23; hh++) {
            for (let qq = 0; qq <= 3; qq++) {
                let min = qq * 15;
                let absTime ="2020-06-" + dd + " " + hh + ":" + min + ":00";

                let tpRandom = Math.random() * 100;              
                queryMsg = "INSERT INTO TP(start_time, ne_name, apn, tp_kb) VALUES('" + absTime + "', 'vGGSRST01', 'test', '" + tpRandom + "')";
                con.query(queryMsg, (err, result) => {
                    if (err) throw err;   
                    console.log("[" + absTime + "][vGGSRST01][test][" + tpRandom + "]");
                })

                tpRandom = Math.random() * 100;
                queryMsg = "INSERT INTO TP(start_time, ne_name, apn, tp_kb) VALUES('" + absTime + "', 'vGGSSNK01', 'test', '" + tpRandom + "')";
                con.query(queryMsg, (err, result) => {
                    if (err) throw err;
                    console.log("[" + absTime + "][vGGSSNK01][test][" + tpRandom + "]");
                })
            }
        }
    }
    con.end((err) => console.log('Db connection terminated gracefully.'));
})




