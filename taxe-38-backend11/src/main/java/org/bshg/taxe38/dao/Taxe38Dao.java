package org.bshg.taxe38.dao;
import org.bshg.taxe38.entity.Taxe38;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface Taxe38Dao extends JpaRepository<Taxe38, Long> {
int deleteByIdIn(List<Long> ids);
int deleteByRedevableId(Long id);
List<Taxe38> findByRedevableId(Long id);
int deleteByLocaleId(Long id);
List<Taxe38> findByLocaleId(Long id);
int deleteByTrimId(Long id);
List<Taxe38> findByTrimId(Long id);
}