package bitcamp.backend.community.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.backend.community.service.RecommentService;

@RestController
@RequestMapping("/recomment")
@CrossOrigin("*")
@SpringBootApplication
public class RecommentController {

  @Autowired
  private RecommentService recommentService;


  //  @PostMapping("/communityNo")
  //  public Object cSearchNo(@RequestBody HashMap<String, Object> param) {
  //
  //    Map<String, Object> result = new HashMap<>();
  //
  //    if (CommunityService.get(Integer.parseInt((String) (param.get("no"))) != null) {
  //      Community community = communityService.get(Integer.parseInt((String) (param.get("no")));
  //
  //      result.put("status", "success");
  //      result.put("data", community);
  //    } else {
  //      result.put("status", "fail");
  //    }
  //
  //    return result;
  //  }

  //  @CrossOrigin("*")
  //  @PostMapping("/files")
  //  public Object home(MultipartHttpServletRequest request) {
  //
  //
  //    List<MultipartFile> files = request.getFiles("files");
  //    List<String> strs = new ArrayList<>();
  //
  //    System.out.println("커뮤 번호 : " + request.getParameter("comNo"));
  //
  //    for (MultipartFile file : files) {
  //      System.out.println(file.getOriginalFilename() + ":" + file.getSize());
  //      strs.add(objectStorageService.uploadFile(bucketName, file));
  //    }
  //    return strs;
  //  }

  //  @CrossOrigin("*")
  //  @PostMapping("/insertComImg")
  //  public void imgCommunity(MultipartHttpServletRequest request) {
  //    List<MultipartFile> files = request.getFiles("files");
  //    int c_No = Integer.parseInt(request.getParameter("comNo"));
  //
  //    System.out.println("커뮤 사진번호 : " + c_No);
  //
  //    for (MultipartFile file : files) {
  //      System.out.println(file.getOriginalFilename() + ":" + file.getSize());
  //      String str = objectStorageService.uploadFile(bucketName, file);
  //
  //      System.out.println(str);
  //
  //      CommunityImg communityImg = new CommunityImg();
  //      communityImg.setComNo(c_No);
  //      communityImg.setImgUrl(str);
  //      communityImg.setImgName(file.getOriginalFilename());
  //      communityImg.setImgType(file.getContentType());
  //
  //      communityImgService.add(communityImg);
  //    }
}

