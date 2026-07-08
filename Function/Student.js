function Student(e_id, name, email, phone,address,course, year = 1){
    this.e_id = e_id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.course = course;
    this.year = year;

    this.updateName= function (name){
        if(name.length == 0){
            console.log("Please..Enter valid name");
        }else{
            this.name = name;
            console.log(this.name); 
        } 
    }

    this.updateEmail = function(email){
        if(email.length == 0){
            console.log("Please...Enter valid email id");
        }else{
            this.email = email;
            console.log(this.email);
        }
        
    }

    this.updatePhone = function (phone){
        if(phone.length != 10){
            console.log("Please enter valid phone number!!");
        }else{
            this.phone = phone;
        console.log(this.phone);
        }
    }

    this.updateAddress = function(address){
        if(address.length == 0){
            console.log("Please..enter valid address");
        }else{
            this.address = address;
            console.log(this.address);
        }   
    }

    this.updateYear = function(year){
        if(year < 1){
            console.log("Invalid year...Pass a valid year");
        }else{
            this.year = year;
            console.log(this.year)
        }  
    }

    this.updateCourse = function(course){
        if(course.length == 0){
            console.log("Please..enter valid course");
        }else{
            this.course = course;
            console.log(this.course);
        }
    }
}

