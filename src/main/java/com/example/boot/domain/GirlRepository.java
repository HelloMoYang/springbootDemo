package com.example.boot.domain;

import org.springframework.data.jpa.repository.JpaRepository;
													//类名，Id类型
public interface GirlRepository extends JpaRepository<Girl, Integer>{
	
}
