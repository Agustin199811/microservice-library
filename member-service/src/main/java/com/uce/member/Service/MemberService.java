package com.uce.member.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uce.member.Model.Member;
import com.uce.member.Repository.MemberRepository;

@Service
public class MemberService {
    
    @Autowired
    private MemberRepository memberRepository;

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public Member createMember(Member member) {
        return memberRepository.save(member);
    }
}
