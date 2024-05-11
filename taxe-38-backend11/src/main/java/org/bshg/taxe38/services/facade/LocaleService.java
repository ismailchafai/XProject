package org.bshg.taxe38.services.facade;

import org.bshg.taxe38.entity.Locale;
import org.bshg.taxe38.entity.Rue;
import org.bshg.taxe38.entity.Redevable;
import org.bshg.taxe38.entity.CategorieLocale;
import org.bshg.taxe38.zutils.pagination.Pagination;

import java.util.List;

public interface LocaleService {
    Locale findById(Long id);

    List<Locale> findAllOptimized();

    List<Locale> findAll();

    Pagination<Locale> findPaginated(int page, int size);

    Locale create(Locale item);

    List<Locale> create(List<Locale> item);

    Locale update(Locale item);

    List<Locale> update(List<Locale> item);

    void deleteById(Long id);

    void delete(Locale item);

    void delete(List<Locale> items);

    void deleteByIdIn(List<Long> ids);

    int deleteByRueId(Long id);

    List<Locale> findByRueId(Long id);

    int deleteByRedevableId(Long id);

    List<Locale> findByRedevableId(Long id);

    List<Locale> findByRedevableUsername(String username);

    int deleteByCategorieLocaleId(Long id);

    List<Locale> findByCategorieLocaleId(Long id);
}