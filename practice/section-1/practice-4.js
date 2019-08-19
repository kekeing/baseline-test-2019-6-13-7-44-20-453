'use strict';

function collectSameElements(collectionA, objectB) {

  var  result=[];
  let collectionB = objectB.value;

  for (var i=0;i < collectionA.length;++i)
  {
    for (var j=0;j < collectionB.length;++j)
    {


      if (collectionA[i]['key'] == collectionB[j])
      {
        result.push(collectionA[i]['key']);
      }
    }
  }

  return result;

}
