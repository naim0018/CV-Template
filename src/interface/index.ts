
export type TSummary ={
  summary:string
}

export type TPersonalInfo ={
    personalInfo : {
      firstName:string,
      lastName:string,
      jobTitle:string,
        address:string,
        phone:string,
        email:string
    }
}

export type TEducation = {
    edu: {
      universityName: string,
      startDate: string,
      endDate?: string,
      degree: string,
      major: string,
      currentlyStudying: boolean,
      description?: string
    }
  }

 export type TExperience = {
  exp : {
    title: string;
    companyName: string;
    city: string;
    state: string;
    startDate: string;
    endDate?: string;
    currentlyWorking: boolean;
    workSummary: string;
  }
  }
  export type TSkill ={
   skill:{
     id:number,
     name:string,
     rating:number
   }
}

export type TTitle ={
    title:string
}