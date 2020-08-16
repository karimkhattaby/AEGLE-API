// @ts-nocheck

const handleCheckupPost = (req, res, db) => {
    const { id } = req.params;
    const { data } = req.body;

    if (!data) {
        return res.status(400).json("No data found in request body");
    }
    
    db("reports")
    .where("patientid", '=', id)
    .update( {data: data} )
    .returning("*")
    .then(report => res.json(report[0]))
    .catch(err => res.status(400).json("Unable to Post Data"));
};

module.exports = {
    handleCheckupPost: handleCheckupPost,
};