function uppercase(str)
{
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      console.log("Uppercase");
    } 
    else
    {
      console.log("Not uppercase");
    }
}
uppercase('Ovais');