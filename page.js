
function check()
                {
                    if(document.page.txt1.value==0)
                    {
                        alert("Please enter a valid Mail id");
                        return false;
                    }
                    if(document.page.pass.value==0)
                    {
                        alert("Please enter a valid password");
                        return false;
                    }
                    return true;
                    
                }