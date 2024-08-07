package com.puihay.GA.GreenSG.controllers;

import java.util.List;

import com.puihay.GA.GreenSG.entities.Mscp;
import com.puihay.GA.GreenSG.services.MscpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MscpController {

  @Autowired
  MscpService mscpService;

  @GetMapping("/mscps")
  public List<Mscp> getMscps() {
    return mscpService.getMscps();
  }

  @PostMapping("/mscps")
  public Mscp postMscp(@RequestBody Mscp mscp) {
    return mscpService.postMscp(mscp);
  }
  
  @GetMapping("/mscp/search")
  public List<Mscp> search(@RequestParam String field) {
    return mscpService.search(field);
  }
  
  @PostMapping("/mscps/seed")
  public List<Mscp> mscpSeed() {
    return mscpService.mscpSeed();
  }


}
