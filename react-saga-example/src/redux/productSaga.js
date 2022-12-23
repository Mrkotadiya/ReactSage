import {takeEvery,put} from "redux-saga/effects"


function* getProducts(){
    let data= yield fetch("https://gorest.co.in/public/v2/users");
    data = yield data.json();
    console.log("product List called",data);
    console.log("call api here");
    yield put({type:"SET_PRODUCT_LIST",data})
}


function* productSaga(){
    yield takeEvery('PRODUCT_LIST',getProducts)
}
export default productSaga; 