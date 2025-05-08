        const fromj=document.getElementById("from");
        const toj=document.getElementById("to");
        const dispj=document.getElementById("disp");

        function obj(fromo,too,goTimeo,comeTimeo,timeo,feeso,dayso,decriptiono)
        {
            this.fromo=fromo;
            this.too=too;
            this.goTimeo=goTimeo;
            this.comeTimeo=comeTimeo;
            this.timeo=timeo;
            this.feeso=feeso;
            this.dayso=dayso;
            this.decriptiono=decriptiono;
        }

        const object0 = new obj("Karwar","Murdeshwar","9:00 AM","6:00 PM","9 hrs trip","Rs 1000","(MONDAYS only)",
                               "Additional Places visited in this trip are: Mirjan fort,Idagunji,Apsarakonda falls,Mangrove forest");    
        const object1 = new obj("Karwar","Murdeshwar","8:00 AM","4:00 PM","8 hrs trip","Rs 500","(MONDAYS only)",
                               "Additional Places visited in this trip are: Idagunji,Apsarakonda falls");
        const object8 = new obj("Yana","Murdeshwar","8:00 AM","4:00 PM","8 hrs trip","Rs 500","(MONDAYS only)",
                               "Additional Places visited in this trip are: Idagunji,Apsarakonda falls");
        const object9 = new obj("Dandeli","Murdeshwar","8:00 AM","4:00 PM","8 hrs trip","Rs 500","(MONDAYS only)",
                               "Additional Places visited in this trip are: Idagunji,Apsarakonda falls");
        const object2 = new obj("Karwar","Yana","9:00 AM","6:00 PM","9 hrs trip","Rs 1000","(MONDAYS only)",
                                "Additional Places visited in this trip are: Mirjan fort,Idagunji,Apsarakonda falls,Mangrove forest");
        const object3 = new obj("Karwar","Dandeli","8:00 AM","4:00 PM","8 hrs trip","Rs 500","(MONDAYS only)",
                                "Additional Places visited in this trip are: Idagunji,Apsarakonda falls");
        const object4 = new obj("Dandeli","Yana","12:00 AM","12:00 PM","12 hrs trip","Rs 900","(SUNDAYS only)",
                                "Additional Places visited in this trip are: Anashi Ghat,Marikamba devasthanam,Apsarakonda falls,Honnavar kyking");
        const object5 = new obj("Dandeli","Karwar","9:00 AM","6:00 PM","9 hrs trip","Rs 1000","(MONDAYS only)",
                                "Additional Places visited in this trip are: Mirjan fort,Idagunji,Apsarakonda falls,Mangrove forest");
        const object6 = new obj("Yana","Dandeli","9:00 AM","6:00 PM","9 hrs trip","Rs 700","(MONDAYS only)",
                                "Additional Places visited in this trip are: Mirjan fort,Idagunji,Apsarakonda falls,Mangrove forest");
        const object7 = new obj("Yana","Karwar","9:00 AM","6:00 PM","9 hrs trip","Rs 1000","(MONDAYS only)",
                                "Additional Places visited in this trip are: Mirjan fort,Idagunji,Apsarakonda falls,Mangrove forest");
        const details=[object0,object1,object2,object3,object4,object5,object6,object7,object8,object9];                                                      //add objects   

        function searchit()
        {
            event.preventDefault();

            dispj.innerHTML="LIST IS DISPLAYED HERE <br>";
            for(var i=0;i<details.length;i++)
            {
                if((details[i].fromo==fromj.value)&&(details[i].too==toj.value))
                {
                    var backdisp=document.createElement("div");                                                                              //creating div
                    backdisp.className="bdisp";

                    var chose=document.createElement("button");                                                                             // creating button
                    chose.className="choseBut";
                    chose.innerHTML=" GO ";
                    chose.addEventListener('click',pay);

                    backdisp.innerHTML=backdisp.innerHTML+"<br><b>"+details[i].fromo+"----------"+details[i].too+
                                      "</b><br><hr><br>Boarding time : "+details[i].goTimeo+"          Return time : "+details[i].comeTimeo+
                                      "<br>Time Estimated: "+details[i].timeo+"<br>Fees: <i><b>"+
                                       details[i].feeso+"</i></b><br>"+
                                       details[i].dayso+"<br>"+details[i].decriptiono;

                    dispj.appendChild(backdisp);
                    backdisp.appendChild(chose);
                    
                    
                }
            }
            function pay()
            {
                dispj.innerHTML="<br><b> Payment </b><br>";
                dispj.style.backgroundColor="aliceblue";
                var scanimage=document.createElement('img');
                scanimage.className="image";
                scanimage.src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png";
                dispj.appendChild(scanimage);
                dispj.innerHTML=dispj.innerHTML+" <br>Scan and Pay<br><br>";
            }
            
        }