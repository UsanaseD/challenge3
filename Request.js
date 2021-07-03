import request  from 'request';


export default class Request{

  static async callExtrenalApiUsingRequest  (req,res) {
        try {
      await request.get(`https://jsonplaceholder.typicode.com/albums/${req.params.id}/photos`,
                { json: true }, (err,  body) => {
                    if (err) {
                        return res(err);
                    }
                    return res.status(200).json({
                        data: body
                    })
        })
        }
    catch (error){
 console.log(error)
}

}
    
}