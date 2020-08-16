// @ts-nocheck

const handlePatientPost = (req, res, db) => {
};

const handlePatientGet = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from("patients").where("id", '=', id)
    .then(patient => patient.length ? res.json(patient[0]) : res.status(400).json("Not Found"))
    .catch(err => res.status(400).json("Error Getting Patient"));
};

const handlePatientPut = (req, res, db) => {
};

const handlePatientDelete = (req, res, db) => {
};

module.exports = {
    handlePatientPost: handlePatientPost,
    handlePatientGet: handlePatientGet,
    handlePatientPut: handlePatientPut,
    handlePatientDelete: handlePatientDelete
};