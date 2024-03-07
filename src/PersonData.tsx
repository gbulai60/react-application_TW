import { makeAutoObservable } from "mobx";

class PersonData {
    name = "Bulai Gheorghe";
    age = 21;
    group = "CR-221";

    constructor(){
        makeAutoObservable(this);
    }
}

const personData = new PersonData();
export default personData;