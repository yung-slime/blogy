type user = {
    usrName: string,
    status: boolean,
    // what if this data type grows in size in terms of required props for validating the 
    // authentication status.
    };

function isAuthenticatedUsr(usr: user){
    return usr.status? `${usr.usrName} is authenticated.`: `${usr.usrName} isn't authenticated.`;
}
let tanishq = {
    usrName: "yungSlime",
    status: true,
};
console.log(isAuthenticatedUsr(tanishq));


