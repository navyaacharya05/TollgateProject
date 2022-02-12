//Date: 28-01-2022
package casestudy.basic.fasttag.FastTag.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
//util,io,sql,swing,lang
//17jdk>> 5000+ inbuilt classes: String,List,Integer,Double

import javax.persistence.Id;


//Created a entity class FastTag
@Entity
public class FastTag 
{
	@Id
	private String vehicleNumber;
	
	private String ownerName,vendor;
	private Integer id;
	private Double balance;
	
	@ElementCollection
	private List<String> transactions=new ArrayList<String>();
	
	//Adding getter and setter methods  right click >> source>> generate getter and setter
	public String getVehicleNumber() {
		return vehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getVendor() {
		return vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Double getBalance() {
		return balance;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}

	public List<String> getTransactions() {
		return transactions;
	}

	public void setTransactions(List<String> transactions) {
		this.transactions = transactions;
	}
	
	
}
