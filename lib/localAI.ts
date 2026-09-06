const LOCAL_AI_URL = process.env.LOCAL_AI_URL;


export async function askLocalAI(prompt:string){

  if(!LOCAL_AI_URL){
    throw new Error(
      "LOCAL_AI_URL is missing"
    );
  }


  const response = await fetch(
    `${LOCAL_AI_URL}/api/generate`,
    {
      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({

        model:"llama3",

        prompt,

        stream:false

      })

    }
  );


  if(!response.ok){

    throw new Error(
      "Local AI unavailable"
    );

  }


  return response.json();

}
