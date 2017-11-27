package com.example.boot.domain;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
													//类名，Id类型
public interface GirlRepository extends JpaRepository<Girl, Integer>{
	
	//	通过年龄查询
	public List<Girl> findByAge(Integer age);
}
