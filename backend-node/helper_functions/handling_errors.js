//helper function

function itemNotFound(id, res){
    return  res.status(404).json({msg:`requested id ${id} not found`});
  }
  exports.itemNotFound = itemNotFound;