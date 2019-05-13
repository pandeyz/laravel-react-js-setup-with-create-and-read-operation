using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
namespace Laravel_react
{
    #region Projects
    public class Projects
    {
        #region Member Variables
        protected int _id;
        protected string _name;
        protected string _description;
        protected bool _is_completed;
        protected unknown _created_at;
        protected unknown _updated_at;
        #endregion
        #region Constructors
        public Projects() { }
        public Projects(string name, string description, bool is_completed, unknown created_at, unknown updated_at)
        {
            this._name=name;
            this._description=description;
            this._is_completed=is_completed;
            this._created_at=created_at;
            this._updated_at=updated_at;
        }
        #endregion
        #region Public Properties
        public virtual int Id
        {
            get {return _id;}
            set {_id=value;}
        }
        public virtual string Name
        {
            get {return _name;}
            set {_name=value;}
        }
        public virtual string Description
        {
            get {return _description;}
            set {_description=value;}
        }
        public virtual bool Is_completed
        {
            get {return _is_completed;}
            set {_is_completed=value;}
        }
        public virtual unknown Created_at
        {
            get {return _created_at;}
            set {_created_at=value;}
        }
        public virtual unknown Updated_at
        {
            get {return _updated_at;}
            set {_updated_at=value;}
        }
        #endregion
    }
    #endregion
}