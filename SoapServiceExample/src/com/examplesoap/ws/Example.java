package com.examplesoap.ws;

import javax.jws.WebMethod;
import javax.jws.WebService; 

@WebService
public interface Example {
	@WebMethod
	public int getDeuda(int id);
}
