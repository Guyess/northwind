import { Notyf } from "notyf";

class Notify {
	private notyf = new Notyf({
        duration: 3000,
        position: {x: "center", y:"top"},
        dismissible: true

    });


public success(msg: string): void{
    this.notyf.success(msg);
}

public error(err: any):void{
    const msg = this.extractMessage(err);
    this.notyf.error(msg);
}

private extractMessage (err: any): string{

    //On string error
    if(typeof err === "string") return err;
    
    //on exios error
    if(typeof err?.response?.data ==="string") return err.response.data;

    //on JavaScript error
    if(typeof err?.message === "string") return err.message;

    return "There is an Error, please try again."
}

}

export const notify = new Notify();
function msg(msg: any, string: any) {
    throw new Error("Function not implemented.");
}

