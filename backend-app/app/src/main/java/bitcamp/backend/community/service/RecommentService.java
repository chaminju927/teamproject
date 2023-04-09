package bitcamp.backend.community.service;

import java.util.List;

import bitcamp.backend.community.vo.Recomment;

public interface RecommentService {
	 void add(Recomment recomment);
	  List<Recomment> list();
	  Recomment get(int no);
	  void update(Recomment recomment);
	  void delete(int no);
}
