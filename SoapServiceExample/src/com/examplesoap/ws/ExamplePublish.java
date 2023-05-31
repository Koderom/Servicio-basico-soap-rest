package com.examplesoap.ws;
import javax.xml.ws.Endpoint;

public class ExamplePublish {
	public static void main(String[] args) {
		Endpoint.publish("http://localhost:5000/WS/Example", new ExampleImpl());
	}
}