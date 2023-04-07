package bitcamp.backend.community.controller;

import java.util.logging.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.backend.community.service.CommunityImgService;
import bitcamp.backend.community.service.CommunityService;
import bitcamp.backend.community.vo.Community;
import bitcamp.util.RestResult;
import bitcamp.util.RestStatus;

@RestController
@RequestMapping("/community")
@CrossOrigin("*")
public class CommunityController {

  Logger log = LogManager.getLogger(getClass());

  @Autowired
  private CommunityService communityService;

  @Autowired
  private CommunityImgService communityImgService;

  // @GetMapping("/test")
  // public void test(){
  // communityService.get(7);
  // System.out.println(communityService);
  // }

  @PostMapping
  public Object insert(@RequestBody Community community) {
    RestResult restResult = new RestResult();
    communityService.add(community);
    restResult.setData(community);
    restResult.setStatus(RestStatus.SUCCESS);
    return restResult;
  }

  @GetMapping("/list")
  public Object list() {
    return new RestResult()
        .setStatus(RestStatus.SUCCESS)
        .setData(communityService.list());
  }

  @GetMapping("{no}")
  public Object view(@PathVariable int no) {
    return new RestResult()
        .setStatus(RestStatus.SUCCESS)
        .setData(communityService.get(no))
        .setPhoto(communityImgService.get(no));
  }

  //  @PutMapping("{no}")
  //  public Object update(@PathVariable int no, @RequestBody Community community) {
  //
  //    community.setNo(no);
  //    communityService.update(community);
  //
  //    return new RestResult()
  //        .setStatus(RestStatus.SUCCESS);
  //  }

  @PutMapping("{no}")
  public Object update(@PathVariable int no, Community community) throws Exception {

    // URL 의 번호와 요청 파라미터의 번호가 다를 경우를 방지하기 위해
    // URL의 번호를 게시글 번호로 설정한다.
    community.setNo(no);

    Community old = communityService.get(community.getNo());
    //    if (old.getWriter().getNo() != loginUser.getNo()) {
    //      return new RestResult()
    //          .setStatus(RestStatus.FAILURE)
    //          .setErrorCode(ErrorCode.rest.UNAUTHORIZED)
    //          .setData("권한이 없습니다.");
    //    }



    //      String filename = UUID.randomUUID().toString();
    //      file.transferTo(new File(System.getProperty("user.home") + "/webapp-upload/" + filename));
    //
    //      BoardFile boardFile = new BoardFile();
    //      boardFile.setOriginalFilename(file.getOriginalFilename());
    //      boardFile.setFilepath(filename);
    //      boardFile.setMimeType(file.getContentType());
    //      boardFile.setBoardNo(board.getNo());
    //      boardFiles.add(boardFile);
    //    }
    //    board.setAttachedFiles(boardFiles);
    //
    //    boardService.update(board);
    //
    //    return new RestResult()
    //        .setStatus(RestStatus.SUCCESS);
    //  }

  }
}
