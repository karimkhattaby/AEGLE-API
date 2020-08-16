// @ts-nocheck

const handleReportGet = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from("reports").where("patientid", '=', id)
    .then(report => report.length ? res.json(report[0]) : res.status(400).json("Not Found"))
    .catch(err => res.status(400).json("Error Getting Report"));
};

const handleReportPut = (req, res) => {

};

module.exports = {
    handleReportGet: handleReportGet,
    handleReportPut: handleReportPut
};