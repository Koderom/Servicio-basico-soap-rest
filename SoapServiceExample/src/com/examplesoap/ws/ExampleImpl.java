package com.examplesoap.ws;

import java.util.HashMap;
import javax.jws.WebService;
import models.User;
//import org.apache.cxf.interceptor.InInterceptors;


@WebService(endpointInterface="com.examplesoap.ws.Example")
@InInterceptors(classes = WSSecurityInterceptor.class)

public class ExampleImpl implements Example{
	HashMap<Integer, User> usuarios;
	public ExampleImpl() {
		
		usuarios = new HashMap<>();
		usuarios.put(1, new User("oscar", "12345", 150));
		usuarios.put(2, new User("martin", "23456", 180));
		usuarios.put(3, new User("oscar", "12345", 150));
	}
	
	@Override
	public int getDeuda(int id) {
		return usuarios.get(id).deuda;
	}

}
