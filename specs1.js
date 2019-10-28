describe('Protractor baby steps',function() {  


    it('Open Angular js website',function() {
    

    browser.get('http://juliemr.github.io/protractor-demo/').then(function()
    {
        element(by.model("first")).sendKeys("8");
        element(by.model("second")).sendKeys("4");
        element(by.id("gobutton")).click();
        //element(by.model("operator")).element(by.css("option:nth-child(3)")).click();
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("6");
        element(by.id("gobutton")).click();


        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("10");
        element(by.id("gobutton")).click();
        
        //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
        //element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();    
       // expect(element(by.model("operator")).element(by.css("option:nth-child(3)")).getText()).toBe("%");
        
        
        // all picks all the items of the same type
         element.all(by.repeater("result in memory")).each(function(item)
        {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text)
            {
            console.log(text);
            })
        })

       
    })
    

    
    
    })
    
     
    
    
    //Each it block will be called as a spec
    
    
    
    it('close browswer', function() {
    
    
    
    // code to close browser
    })
    
    
    
    })