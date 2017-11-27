package com.example.boot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.boot.domain.Girl;
import com.example.boot.domain.GirlRepository;

@Service
public class GirlService {

	public GirlService() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	private GirlRepository girlRepository;
	 
	@Transactional 	//	Spring boot 只需要加此注解，即可开启事务
	public void insertTwo() {
		Girl girlA = new Girl();
		girlA.setAge(18);
		girlA.setCupSize("B");
		girlRepository.save(girlA);
		
		Girl girlB = new Girl();
		girlB.setAge(21);
		girlB.setCupSize("Dsss");
		girlRepository.save(girlB);
	}
}
