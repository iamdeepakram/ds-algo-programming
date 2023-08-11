// Constructor function 
function Student(name, dob, address, phoneNumber, department,programme, yearOfJoining, totalFees, feePaid) {
        this.name = name;
        this.dob = dob;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.department = department;
        this.programme = programme;
        this.yearOfJoining = yearOfJoining;
        this.totalFees = totalFees;
        this.feePaid = feePaid;
        this.updateAddress = function(newAddress){
            this.address = newAddress;

        }
        this.updatePhoneNumber = function(newPhoneNumber){
            this.phoneNumber = newPhoneNumber;
            
        }
        this.updateFees = function(feeAmount){
            this.feePaid = this.feePaid + feeAmount;
        }
    }


let student1 = new Student('sanjay', '1996', 'Warangal', '89898983', 'ECE', 'Btech', '2018', '125000', '60000');

