package by.slesh.itechart.fullcontact.dao.impl;

import by.slesh.itechart.fullcontact.dao.EntityDao;
import by.slesh.itechart.fullcontact.dao.NationalityDao;
import by.slesh.itechart.fullcontact.dao.reader.DaoReadersContainer;
import by.slesh.itechart.fullcontact.domain.NationalityEntity;

/**
 * @author Eugene Putsykovich(slesh) Mar 9, 2015
 *
 */
public class NationalityDaoImpl extends EntityDao<NationalityEntity> implements NationalityDao {
    private static final String ORDER_BY = 
	    "ORDER BY nationality_id ASC ";
    
    private static final String GET_NATIONALITY_ID_BY_VALUE_QUERY = 
	    "\n SELECT nationality_id "
          + "\n FROM nationalities " 
          + "\n WHERE nationality_value = ?";

    private static final String GET_ALL_QUERY = 
	    "\n SELECT nationality_id, nationality_value "
	  + "\n FROM nationalities";
    

    private static final String GET_LIMIT_QUERY = 
	    	GET_ALL_QUERY
	    + "\n " + ORDER_BY 
	    + "\n LIMIT ?, ?";
    
    public NationalityDaoImpl() {
    }

    public NationalityDaoImpl(boolean isUseCurrentConnection, boolean isCloseConnectionAfterWork) {
	super(isUseCurrentConnection, isCloseConnectionAfterWork);
	setGetIdQuery(GET_NATIONALITY_ID_BY_VALUE_QUERY);
	setGetAllQuery(GET_ALL_QUERY);
	setGetLimitQuery(GET_LIMIT_QUERY);
	setReader(DaoReadersContainer.ENTITY_READER);
    }
}
