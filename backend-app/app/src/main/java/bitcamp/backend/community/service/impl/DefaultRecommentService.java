package bitcamp.backend.community.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import bitcamp.backend.community.dao.RecommentDao;
import bitcamp.backend.community.service.RecommentService;
import bitcamp.backend.community.vo.Recomment;

@Service
public class DefaultRecommentService implements RecommentService {
	
	@Autowired private RecommentDao recommentDao;

	@Transactional
	@Override
	public void add(Recomment recomment) {
		recommentDao.insert(recomment);
	}

	@Override
	public List<Recomment> list() {
		return recommentDao.findAll();
	}

	@Override
	public void delete(int no) {
		recommentDao.delete(no);
	}

}
