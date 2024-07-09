package com.uce.member.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.uce.member.Model.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member,Long> {
    
}
