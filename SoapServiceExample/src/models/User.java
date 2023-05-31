package models;

public class User {
	public String name;
	public String password;
	public int deuda;
	
	public User(String name, String password, int deuda) {
		this.name = name;
		this.password = password;
		this.deuda = deuda;
	}
}
