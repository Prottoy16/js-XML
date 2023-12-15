const GetData=()=>{

let xhr = new XMLHttpRequest();

xhr.open("GET","https://jsonplaceholder.typicode.com/posts");

xhr.onload=()=>{
    let data=xhr.response;
    console.log(JSON.parse(data));
}
xhr.onerror=()=>{
    console.log("Error is here");
}

xhr.send();

}

GetData();