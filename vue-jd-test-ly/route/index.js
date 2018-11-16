const express = require('express');
const mysql = require('mysql');
const common = require('../libs/common');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ly'
});
module.exports = () => {
  const route = express.Router();
  const getHomeStr = `SELECT product_id,product_name,product_price,product_img_url,product_uprice FROM product`;
  const getCateNames = `SELECT * FROM category ORDER BY category_id desc`;
  //get homePage datas
  route.get('/home',(req, res) => {
      

    getHomeDatas(getHomeStr, res);
  })
  function getHomeDatas(getHomeStr,res) {
    db.query(getHomeStr, (err, data) =>{
      if(err){
        console.log(err)
        res.status(500).send('database errd').end();
      }else{
        if(data.length == 0){
          res.status(500).send('no datas').end();
        }else{
          res.send(data)
        }
      }
    })
  }

    route.get('/category', (req, res) => {
        getCateNamesDatas(getCateNames, res);
    });

    function getCateNamesDatas(getCateNames, res) {
        db.query(getCateNames, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('database err').end();
            } else {
                if (data.length == 0) {
                    res.status(500).send('no datas').end();
                } else {
                    res.send(data);
                }
            }
        });
    };


 route.get('/categorygoods', (req, res) => {
        let mId = req.query.mId;
        const sql = `select * from product,category where product.category_id=category.category_id and category.category_id='${mId}'`;
        getCateGoods(sql, res);
    });

    function getCateGoods(sql, res) {
        db.query(sql, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('database err').end();
            } else {
                if (data.length == 0) {
                    res.status(500).send('no datas').end();
                } else {
                    res.send(data);
                }
            }
        });
    }

  route.get('/detail', (req, res) => {

    let produId = req.query.mId;
      console.log(res)
    const imagesStr = `select image_url from product_image where product_id='${produId}'`;
    const productStr = `select * from product where product_id='${produId}'`;
    let detailDatas = [];
    db.query(imagesStr, (err, imgDatas) => {
      if(err){
        console.log(err)
        res.status(500).send('database err').end();
      }else{
        detailDatas.push(imgDatas)
        db.query(productStr, (err, data) => {
          if(err){
            console.log(err)
            res.status(500).send('database err').end();

          }else{
            detailDatas.push(data);
            res.send(detailDatas);
          }
        })
      }
    })
  })


  route.get('/cart', (req, res) => {
    const cartStr = `SELECT cart_id,user_id,product.product_id,product_name,product_uprice,product_img_url,goods_num,product_num,shop_name FROM product,user,goods_cart,shop where product.product_id=goods_cart.product_id and user.user_id=goods_cart.user_id and shop.shop_id=product.shop_id`;
    db.query(cartStr, (err,data) => {
      if(err){
        console.log(err)
        res.status(500).send('database err').end();

      }else{
        if(data.length == 0 ){
          res.status(500).send('no datas').end();

        }else{
          res.send(data);
        }
      }
    })
  })

  route.get('/search', (req, res) =>{
    let keyWord = req.query.kw;
    let hot = req.query.hot;
    let priceUp = req.query.priceUp;
    let priceDown = req.query.peiceDown;
    const keywordStr = `select * from product,shop where product.shop_id=shop.shop_id and product.product_name like '%${keyWord}%'`;
    const hotStr = `select * from product,shop where product.shop_id=shop.shop_id and product.product_name like '%${keyWord}%'`;
    const priceUpStr = `select * from product,shop where product.shop_id=shop.shop_id and product.product_name like '%${keyWord}%'`;
    const priceDownStr = `select * from product,shop where product.shop_id=shop.shop_id and product.product_name like '%${keyWord}%'`;
    if(keyWord != ''){
      if( hot != ''){
        getSearchDatas(hotStr, res)
      }else if(priceUp != ''){
        getSearchDatas(priceUpStr, res)
      }else if(priceDown != ''){
        getSearchDatas(priceDown, res)
      }else{
        getSearchDatas(keywordStr, res)
      }
    }
  })

//  get search datas

  function getSearchDatas(keywordStr, res) {
   db.query(keywordStr, (err, data) => {
     if(err) {
       console.log(err)
       res.status(500).send('database err').end();

     }else{
       if(data.length == 0){
         res.status(500).send('no datas').end();

       }else{
         res.send(data)
       }
     }
   })
  }
  // user reg func
  route.post('/reg', (req, res) => {

    let mObj = {};
    for ( let obj in req.body) {
      // mObj = JSON.parse(obj);//因为在前端已经转义过了，所以不需要后端转义了
      mObj = obj;
    }
    let regName = mObj.regName;
    let regPasswd = mObj.regPasswd;
    regPasswd = common.md5(regPasswd + common.MD5_SUFFXIE);
    const insUserInfo = `INSERT INTO user(user_name,login_password,user_number) VALUES('${regName}','${regPasswd}','${regName}')`;
    delReg(insUserInfo, res);
  })

  // deal user register
  function delReg(insUserInfo, res) {
   db.query(insUserInfo, (err) => {
      if(err) {
        console.log(err);
        res.send({'msg': '服务器出错','status':0}).end();

      }else{
        res.send({'msg':'注册成功','status': 1}).end();

      }
   })
  };
    route.post('/login', (req, res) => {

        let mObj = {};
        for (let obj in req.body) {
            // mObj = JSON.parse(obj);
            mObj = obj;

            console.log(mObj);
        }
        let username = mObj.loginName;
        let password = common.md5(mObj.loginPawd + common.MD5_SUFFXIE);
        const selectUser = `SELECT * FROM user where user_name="${username}"`;
        db.query(selectUser, (err, data) => {
            // console.log(selectUser)
            if(err) {
                console.log(err);
                res.send({'msg': '服务器出错','status':0 }).end();

            }else{
                if(data.length == 0 ){
                    res.send({'msg': '该用户不存在','status': -1}).end();

                }else{
                    let dataw = data[0];
                    // console.log(req)

                    if(dataw.login_password === password) {
                        req.session['user_id'] = dataw.user_id;
                        // console.log(req.session['user_id'])//把id存入到session中
                        dataw.msg = '登陆成功';
                        dataw.status = 1;
                        res.send(dataw).end();
                    }else{
                        res.send({'msg':'密码不正确','status': -2}).end();
                    }
                }
            }
        })
    })


  route.get('/userinfo', (req, res) => {
    let uId = req.query.uId;
    const getU = `SELECT user_name,user_number FROM user where user_id='${uId}'`;
    db.query(getU, (err, data) => {
      if(err) {
        console.log(err)
        res.status(500).send('database err').end();

      }else{
        if(data.length == 0){
          res.status(500).send('no datas').end();

        }else{
          res.send(data)
        }

      }
    })
  })

  return route;

}

