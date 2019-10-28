describe('Protractor Alert steps',function() {  

    var total = 0 ;
    var sum= 0;
    function selectItems(product)
    {
        //take 4 cards into list
        //go through each index in the list - and get the title= if title =desired title then in that index i will select add button
        element.all(by.tagName("app-card")).each(function(item)
        {
        
        item.element(by.css("h4 a")).getText().then(function(text)
        {
        if(text==product)
        {
        item.element(By.css("button[class*='btn-info']")).click();
        }
        }) 
            })
    }
    it('Open NonAngular js website Alerts',function() {
    

        browser.get("https://qaclickacademy.github.io/protocommerce/");

      
        element(by.linkText("Shop")).click();
        selectItems("Samsung Note 8");
        selectItems("iphone X");
        selectItems("Nokia Edge");

        element(by.css("[class*='btn-primary']")).click();
       
        element.all(by.css("td[class='col-sm-1 col-md-1 text-center']")).each(function(item,index)
        {
            if(index%2){

                item.element(by.css("strong")).getText().then(function(text){
                    var res= text.split(".");
                    total = total +  Number(res[1]);
                    console.log(total);
                })
            }
            
               
        })
        element(by.css("td[class='text-right']")).getText().then(function(text1){
                
            sum=  text1.split(".");
            //console.log(Number(sum[1]));
            console.log(total);
            console.log(Number(sum[1]));
            expect(Number(sum[1])).toBe(total);       
            })
       

        })
    
})