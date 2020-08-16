// @ts-nocheck

const handleImagePost = (req, res, db) => {
    const { id } = req.params;
    const { image } = req.body;

    if (!image) {
        return res.status(400).json("No data found in request body");
    }

    db("reports")
    .where("patientid", '=', id)
    .update( {image: image} )
    .returning("*")
    .then(res.status(200))
    .catch(err => res.status(400).json("Unable to Post Image"));

    // Call ML API
};

module.exports = {
    handleImagePost: handleImagePost,
};