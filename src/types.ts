export interface RedAlert {
    type: string;
    title: string;
    cities: string[];
    instructions: string;
  }
  
  export interface TemplateVariables {
    type: string;
    title: string;
    cities: string;
    instructions: string;
    time: string;
    date: string;
    count: string;
  }
  